import $ from "jquery";
import "slick-carousel";
import "whatwg-fetch";

const collections = [
  {
    "name": "Summer 2015",
    "images": [
      {
        "url": "https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-106628.jpg",
        "mobile": "",
        "thumb": "",
        "title": ""
      },
      {
        "url": "https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-106193.jpg",
        "mobile": "",
        "thumb": "",
        "title": ""
      },
      {
        "url": "https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-106630.jpg",
        "mobile": "",
        "thumb": "",
        "title": ""
      },
      {
        "url": "https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-84374.jpg",
        "mobile": "",
        "thumb": "",
        "title": ""
      },
      {
        "url": "https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-183094.jpg",
        "mobile": "",
        "thumb": "",
        "title": ""
      },
      {
        "url": "https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-166364.jpg",
        "mobile": "",
        "thumb": "",
        "title": ""
      },
      {
        "url": "https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-81599.jpg",
        "mobile": "",
        "thumb": "",
        "title": ""
      },
      {
        "url": "https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-94174.jpg",
        "mobile": "",
        "thumb": "",
        "title": ""
      }
    ]
  }
];
const URL = "https://api.myjson.com/bins/4nza4";

fetch(URL + '.json')
  .then(response => {
    return response.json();
  })
  .then(json => {
    console.log(json);
  })
