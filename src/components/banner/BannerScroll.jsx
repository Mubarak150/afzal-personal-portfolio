export function BannerScroll(props) {
  return (
    <div className="flex-col-center w-full h-[1rem] mt-16 md:mt-0 sr-only lg:not-sr-only">
      <p className="font-medium text-title cursor-pointer">Scroll Down</p>
      <a href={props.link} className="">
        <box-icon
          name="down-arrow"
          animation="fade-down"
          color="#484343"
        ></box-icon>
      </a>
    </div>
  );
}
