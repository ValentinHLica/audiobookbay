# AudioBookBay Scraper NodeJS

## Install

```
npm install audiobookbay
```

## Usage

| Name  | Description  | Default | Type   |
| ----- | ------------ | ------- | ------ |
| Query | Search Query |         | String |
| Page  | Search Page  | 1       | Number |

```js
const audiobookbay = require("audiobookbay");

const search = audiobookbay.search("dune", 2).then((response) => {
  return response;
});
```

### Response

```json
{
 "success": true,
 "count": "Audiobook Count",
 "pagination": {
  "currentPage": "Current Page",
  "total": "Total Pages"
 },
 "data": [
   {
     "title": "Audiobook Title",
     "url":
       "Audiobook URL",
     "category":
       ["Array of Category's"],
     "lang": "Audiobook Language",
     "cover": "Audiobook Cover",
     "posted": "Date when Audiobook was posted",
     "info": {
         "format": "Audiobook Format",
         "bitrate": "Audiobook Bitrate",
         "size": ["Audiobook Size","Size UNIT"]
     }
   }, ...
 ]
}
```

### Exploring By Category/Tag

#### Category Options

<ul>

  <li>
    Age: children, teen-young-adult, adults, the-undead
  </li>
  <li>
    Category: postapocalyptic, action, adventure, art, autobiography-biographies, business, computer, contemporary, crime, detective, doctor-who-sci-fi, education, fantasy, general-fiction, historical-fiction, history, horror, lecture, lgbt, literature, litrpg, general-non-fiction, mystery, paranormal, plays-theater, poetry, political, radio-productions, romance, sci-fi, science, self-help, spiritual, sports, suspense, thriller, true-crime, tutorial, westerns
    </ul>
  </li>

  <li>
    Category Modifiers: anthology, bestsellers, classic, documentary, full-cast, libertarian, military, novel, short-story
  </li>
</ul>

#### Tag Options

<ul>
<li>
Popular Language: english, dutch, french, spanish, german
</li>
  
</ul>

| Name   | Description              | Default  | Type   |
| ------ | ------------------------ | -------- | ------ |
| Type   | Explore by tag, category | category | String |
| Option | Options filter           |          | String |
| Page   | Page Number              | 1        | String |

```js
const audiobookbay = require("audiobookbay");

const explore = audiobookbay
  .explore("category", "postapocalyptic", 2)
  .then((response) => {
    return response;
  });
```

### Response

```json
{
 "success": true,
 "count": "Audiobook Count",
 "pagination": {
  "currentPage": "Current Page",
  "total": "Total Pages"
 },
 "data": [
   {
     "title": "Audiobook Title",
     "url":
       "Audiobook URL",
     "category":
       ["Array of Category's"],
     "lang": "Audiobook Language",
     "cover": "Audiobook Cover",
     "posted": "Date when Audiobook was posted",
     "info": {
         "format": "Audiobook Format",
         "bitrate": "Audiobook Bitrate",
         "size": ["Audiobook Size","Size UNIT"]
     }
   }, ...
 ]
}
```

### Get Audiobook

| Name      | Description   | Default | Type   |
| --------- | ------------- | ------- | ------ |
| Audiobook | Audiobook URL |         | String |

```js
const audiobookbay = require("audiobookbay");

const book = audiobookbay
  .audiobook("the-road-to-dune-brian-herbert-kevin-j-anderson-frank-herbert")
  .then((response) => {
    return response;
  });
```

### Response

```json
{
  "success": true,
  "data": {
    "title": "Audiobook title",
    "category": ["Array of Category's"],
    "lang": "Audiobook Language",
    "cover": "Audiobook Cover",
    "author": "Audiobook Author",
    "read": "Audiobook Reader",
    "audioSample": "Sample of Audiobook MP3",
    "specs": {
      "format": "Audiobook Format",
      "bitrate": "Audiobook Bitrate"
    },
    "abridged": "Is the book shortened",
    "desc": "Audiobook Description",
    "torrent": {
      "hash": "Audiobook Hash",
      "trackers": ["Audiobook Trackers"],
      "size": ["Audiobook size", "Size UNIT"]
    }
  }
}
```

## Important

### To create magnet link

```js
const magnet = `magnet:?xt=urn:btih:${hash}&dn=${title}&tr=${torrent.trackers.join(
  "&tr="
)}`;
```
