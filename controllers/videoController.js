export const home = (req, res) => res.render("home", { pageTitle: "home" });
export const search = (req, res) => {
  //   const searchingBy = req.query.term;
  const {
    query: { term: searchingBy },
  } = req;
  //   console.log(term);
  res.render("search", { pageTitle: "search", searchingBy: searchingBy });
};
export const videos = (req, res) =>
  res.render("videos", { pageTitle: "videos" });

export const upload = (req, res) =>
  res.render("upload", { pageTitle: "upload" });

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "videoDetail" });

export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "editVideo" });

export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "deleteVideo" });
