import routes from "../routes";
import Video from "../models/Video";
import bodyParser from "body-parser";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    // throw Error("lalalala");
    res.render("home", { pageTitle: "home", videos });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "home", videos: [] });
  }
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
    videos,
  });
};

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "upload" });

export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path },
  } = req;
  //To Do : Upload and save video
  const newVideo = await Video.create({ fileUrl: path, title, description });
  // console.log(newVideo);
  res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id);
    console.log(video);
    res.render("videoDetail", { pageTitle: `${video.title}`, video });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const getEditVideo = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id);
    res.render("editVideo", { pageTitle: `Edit ${video.title}`, video });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};
export const postEditVideo = async (req, res) => {
  const {
    params: { id },
    body: { title, description },
  } = req;
  try {
    await Video.findOneAndUpdate({ id }, { title, description });
    res.redirect(routes.videoDetail(id))

  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "deleteVideo" });
