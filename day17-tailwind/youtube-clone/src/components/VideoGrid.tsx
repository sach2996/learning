import { VideoCard } from "./VideoCard";

export function VideoGrid() {
  const videos = [
    {
      image: "/Poacher.png",
      title: "Poacher Trailer | Amazon Prime India",
      channel: "Prime India",
      views: "5 mn | 5 Days ago ",
      logo: "/logo.png",
    },
    {
      image: "/Poacher.png",
      title: "Poacher Trailer | Amazon Prime India",
      channel: "Prime India",
      views: "5 mn | 5 Days ago ",
      logo: "/logo.png",
    },
    {
      image: "/Poacher.png",
      title: "Poacher Trailer | Amazon Prime India",
      channel: "Prime India",
      views: "5 mn | 5 Days ago ",
      logo: "/logo.png",
    },
    {
      image: "/Poacher.png",
      title: "Poacher Trailer | Amazon Prime India",
      channel: "Prime India",
      views: "5 mn | 5 Days ago ",
      logo: "/logo.png",
    },
    {
      image: "/Poacher.png",
      title: "Poacher Trailer | Amazon Prime India",
      channel: "Prime India",
      views: "5 mn | 5 Days ago ",
      logo: "/logo.png",
    },
    {
      image: "/Poacher.png",
      title: "Poacher Trailer | Amazon Prime India",
      channel: "Prime India",
      views: "5 mn | 5 Days ago ",
      logo: "/logo.png",
    },
    {
      image: "/Poacher.png",
      title: "Poacher Trailer | Amazon Prime India",
      channel: "Prime India",
      views: "5 mn | 5 Days ago ",
      logo: "/logo.png",
    },
    {
      image: "/Poacher.png",
      title: "Poacher Trailer | Amazon Prime India",
      channel: "Prime India",
      views: "5 mn | 5 Days ago ",
      logo: "/logo.png",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 cursor-pointer">
      {videos.map((video) => (
        <div>
          <VideoCard
            title={video.title}
            image={video.image}
            logo={video.logo}
            channel={video.channel}
            views={video.views}
          ></VideoCard>
        </div>
      ))}
    </div>
  );
}
