import videoSrc from '../../../assets/Simple-steps-to-list-your-charger-mod.mp4';

export default function AutoPlayVideo() {
  return (
    <div className="w-full h-full">
      <video
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
}
