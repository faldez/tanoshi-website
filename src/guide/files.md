# Local Manga Files

## Config
Local manga directory are specified on `config.yml` file. Tanoshi support single and multiple directories.

### Single directory

```
local_path:  /path/to/local
```

### Multiple directories

```
local_path:
- name: Local1
  path: /path/to/local1
- name: Local2
  path: /path/to/local2
```

### Docker
To have your local manga files in docker you have to mount your directory into your docker container. e.g.

```
docker create \
    --name=tanoshi \
    -p 8080:80 \
    --mount type=bind,source=/path/to/data,target=/tanoshi \
    --mount type=bind,source=/path/to/manga,target=/tanoshi/manga \
    --restart unless-stopped \
    faldez/tanoshi
```

if you wish to have different path for manga in container, e.g.

```
docker create \
    --name=tanoshi \
    -p 8080:80 \
    --mount type=bind,source=/path/to/data,target=/tanoshi \
    --mount type=bind,source=/path/to/manga,target=/manga \
    --restart unless-stopped \
    faldez/tanoshi
```

 then in `config.yaml` you need to set `local_path` to `/manga` or whatever path you wish them to be. 

## Structure
Manga files have to be structured below, it tested for `cbz` and `cbr` files. Tanoshi support single archive file, archive files inside a series folder, and image folders inside a series folder.

::: warning
While single archive will be considered a series, a folder with images inside will not considered a series.
:::

::: tip Series
Every folder inside manga directory will be considered a series. An archive inside manga directory will be considered a series with 1 chapter.
:::

::: tip Chapters
Every folder or archive inside a series folder will be considered a chapter
:::

::: tip Page
Every file inside archive or a chapter folder will be considered a page.
:::

```
/path/to/manga
├─── Series 1
│    ├─── Volume 1.cbz
|    ├─── Volume 2.cbz
|    └─── ...
├─── Series 2
|    ├─── Volume 1.cbr
|    ├─── Volume 2.cbr
|    └─── ...
├─── Series 3
|    ├─── Volume 1.cbr
|    ├─── Volume 2.cbz
|    ├─── Volume 3
|    |    ├─── Page 1.png
|    |    ├─── Page 2.png
|    |    └─── Page 3.png
|    └─── ...
├─── Series 4.cbz
└─── Series 5.cbr
```

## Manga Details
By default local manga does not have any details. You can input the details by create a file called `details.json` inside a Manga (Series) folder. You can edit from below example as necessary.

```
{
  "title": "An Interesting Manga",
  "author: ["Author 1", "Author 2"],
  "genre: ": ["Romance", "Action"],
  "status": "Ongoing",
  "description": "This manga is so interesting",
  "cover_path": "relative/path/from/series/folder/to/thumbail.jpg",
}
```
