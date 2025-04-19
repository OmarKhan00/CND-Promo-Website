import videoSrc from '../../../assets/Simple-steps-to-list-your-charger-mod.mp4';

export default function AutoPlayVideo() {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 max-w-3xl mx-auto mt-8">
      <video
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        // className="w-full h-auto object-contain"
         className="w-[640px] h-[500px] rounded-xl object-cover shadow-lg"
      />
    </div>
  );
}
