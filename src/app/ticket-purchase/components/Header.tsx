//Icons
import SvgBackButton from "../../../../public/assets/Icons/BackButton";
import SvgLikeButton from "../../../../public/assets/Icons/LikeButton";
import SVGShare from "../../../../public/assets/Icons/shareButton";
import DemoData from "../../../../public/data/DemoData.json";

export default function EventHeader({ eventImg, setShareOpen }: any) {
  return (
    <>
      <div
        className=" text-white grid grid-cols-12 place-items-end content-start "
        style={{
          backgroundImage: `url(${eventImg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <SvgBackButton className="col-start-2 mr-4 " width={45} height={45} />
        <p className="text-center font-semibold text-xl col-start-4 col-end-10 mt-8 mb-2  mr-12">
          {DemoData.eventName}
        </p>
        <SvgLikeButton
          className="col-start-11 mt-4 mr-10 "
          width={45}
          height={45}
        />
        <SVGShare
          className="col-start-12 mr-5 "
          width={45}
          height={45}
          onClick={setShareOpen}
        />
        <div className="col-start-3 mr-6 mt-[550%]">
          {DemoData.DemoTicketLocation.map((ticket) => (
            <div className="flex" key={ticket.Location}>
              <div
                className="h-[10px] mt-[1px] w-[20px] mb-[7px]"
                style={{ backgroundColor: ticket.Color }}
              ></div>
              <p className="ml-1 text-[10px]">{ticket.Location}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// ! Logically the key is not correct, we must change it