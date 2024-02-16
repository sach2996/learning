export function VideoCard(props: any) {
  return (
    <div>
      <img src={props.image}></img>
      <div className="grid grid-cols-12">
        <div className="col-span-2">
          <img className={"rounded-full w-20 h-20"} src={props.logo}></img>
        </div>
        <div className="col-span-10">
          <div>{props.title}</div>
          <div className="col-span-11  text-gray-600 text-base ">
            {props.channel}
          </div>
          <div className="col-span-11 text-gray-600 text-base">
            {props.views}
          </div>
        </div>
      </div>
    </div>
  );
}
