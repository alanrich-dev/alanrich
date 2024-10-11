const recommendations = [
  {
    img: "https://i1.ytimg.com/vi/Rc0K4WhNOvY/hqdefault.jpg",
    title: "The Great Minds of the Western Intellectual Tradition",
    url: "https://www.youtube.com/@dr.michaelsugrue",
  },
  {
    img: "https://i.ytimg.com/vi/O8hhwSn1iaU/maxresdefault.jpg",
    title: "The Abbasids, Islam's Golden Age",
    url: "https://www.youtube.com/watch?v=O8hhwSn1iaU",
  },
  {
    img: "https://i.ytimg.com/vi/Bm1RhjcdJek/maxresdefault.jpg",
    title: "Napoleon's Italian Campaign",
    url: "https://www.youtube.com/watch?v=Bm1RhjcdJek&list=PLUOc2qodFHp9FxrYuZP5OtCbUZ-m4MJVr",
  },
  {
    img: "data:image/png;base64,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",
    title: "Arte",
    url: "https://www.youtube.com/watch?v=iJd5CJMJp7A",
  },
  {
    img: "https://i.ytimg.com/vi/pl52AsS-j1c/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLC7gu8IAwstrE2BaHwFXiPuo4W3DQ",
    title: "Books That Have Made History",
    url: "https://www.youtube.com/playlist?list=PLFBPgxvkodCqK3LDnp1HcdyGJ9wTh8Y_r",
  },
  {
    img: "https://i.ytimg.com/vi/sq5JhW55uGI/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB3gOAAugCigIMCAAQARhlIGUoZTAP&rs=AOn4CLATiu4Gy4ywn6SUxosDZKY_s_fV-Q",
    title: "The Lives of Famous Greeks & Romans",
    url: "https://www.youtube.com/@iandespalo2949/videos",
  },
  {
    img: "https://i.ytimg.com/vi/Aqs7EIqa3PU/maxresdefault.jpg",
    title: "Napoleon in Egypt",
    url: "https://www.youtube.com/watch?v=Aqs7EIqa3PU",
  },
  {
    img: "https://deadline.com/wp-content/uploads/2016/07/peepshow.jpg?w=665",
    title: "Peep Show",
    url: "https://www.youtube.com/watch?v=uVu9no1FH58",
  },
  {
    img: "https://ichef.bbci.co.uk/images/ic/1200x675/p0g66bwh.jpg",
    title: "I, Claudius",
    url: "https://www.youtube.com/watch?v=Z7XRX1UBooQ&list=PLlwzDYw6zp2D6DxLR8zGz1i_7764DYSVQ",
  },
  {
    img: "https://yt3.googleusercontent.com/nrkCjT2S0wgFLymgDvUYF6DEXS_lpN99c499kTQm6YTIkSN_FthRf9JIQHg7OMI8SKDU3Et0JA=s160-c-k-c0x00ffffff-no-rj",
    title: "The Rest is History",
    url: "https://www.youtube.com/channel/UCUYK0BJZF3yNb2fw1EdAXUQ",
  },
  {
    img: "https://i.ytimg.com/vi/mY8Ou7r913Y/maxresdefault.jpg",
    title: "The Brumaire Coup",
    url: "https://www.youtube.com/watch?v=mY8Ou7r913Y",
  },
  {
    img: "https://yt3.googleusercontent.com/ytc/AIdro_l_DnztzuTluEh4JaE7eENqzeOdqs6aUxgkb7C4kdpWnY8=s160-c-k-c0x00ffffff-no-rj",
    title: "Un Gars, une fille",
    url: "https://www.youtube.com/@UngarsunefilleOfficiel",
  },
];

export default recommendations;
