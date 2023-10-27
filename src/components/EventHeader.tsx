//Icons
import SvgBackButton from "../../public/assets/Icons/BackButton";
import SvgLikeButton from "../../public/assets/Icons/LikeButton";
import SVGShare from "../../public/assets/Icons/shareButton";

export default function EventHeader({ eventImg, setShareOpen }: any) {
  return (
    <div
      className="h-[300px] grid grid-cols-12 place-items-end content-start"
      style={{
        backgroundImage: `url(${eventImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <SvgBackButton
        className="col-start-2 mr-5"
        onClick={setShareOpen}
        width={45}
        height={45}
      />
      <SvgLikeButton
        className="col-start-11 mt-4 mr-6 "
        width={45}
        height={45}
      />
      <SVGShare className="col-start-12 mr-3 " width={45} height={45} />
    </div>
  );
}
