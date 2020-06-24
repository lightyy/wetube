import routes from "../routes";

export const home = (req, res) => {
  res.render("home", { pageTitle: "home", videos: db });
};

// export const videos = (req, res) =>  res.render("videos", { pageTitle: "videos" });

export const search = (req, res) => {
  //   const searchingBy = req.query.term;
  const {
    query: { term: searchingBy },
  } = req;
  // console.log(searchingBy);
  res.render("search", {
    pageTitle: "search",
    searchingBy: searchingBy,
    videos: db,
  });
};

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "upload" });

export const postUpload = (req, res) => {
  const {
    body: { file, title, description },
  } = req;
  //To Do : Upload and save video
  res.redirect(routes.videoDetail(48648654));
};

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "videoDetail" });

export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "editVideo" });

export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "deleteVideo" });
