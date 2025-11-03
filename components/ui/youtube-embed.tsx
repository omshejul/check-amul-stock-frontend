interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
  className?: string;
}

export default function YouTubeEmbed({
  videoId,
  title = "YouTube video player",
  className = "",
}: YouTubeEmbedProps) {
  return (
    <div className={`relative w-full aspect-video ${className}`}>
      <iframe
        className="absolute top-0 left-0 w-full h-full rounded-lg"
        src={`https://www.youtube.com/embed/${videoId}?si=_IqeLjAbD1H3XBGa`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}
