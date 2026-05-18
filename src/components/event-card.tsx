import { Link } from "@tanstack/react-router";
import type { EventCardTypes, EventTextTypes, EventTimeTypes } from "@/types/components-types";
import { cn } from "@/lib/utils";
import { MapPin } from "lucide-react";

const EventCardContainer = ({ children }: { children: React.ReactNode }) => (
  <article
    className={cn(
      "rounded-2xl shadow-lg bg-tan-100 flex flex-col lg:flex-row max-sm:gap-y-4",
      "divide-x divide-dashed divide-tan-200 py-4 lg:px-8",
    )}
  >
    {children}
  </article>
);

const EventCardTime = ({ datetime, day, month }: EventTimeTypes) => {
  return (
    <time
      className="text-tan-400 flex md:flex-col justify-center items-center max-sm:gap-x-2.5 gap-y-px lg:pr-12"
      dateTime={datetime}
    >
      <span className="text-3xl md:text-5xl font-bold -tracking-widest">{day}</span>
      <span className="text-3xl md:text-xl font-bold uppercase tracking-tight">{month}</span>
    </time>
  );
};

const EventCardImage = ({ eventImageUrl }: { eventImageUrl: string }) => (
  <div className="flex-1 flex justify-center items-center max-sm:px-4">
    <figure className="rounded-2xl h-40 w-full md:h-24 md:w-36 overflow-hidden">
      <img className="h-full w-full object-cover object-top-left" src={eventImageUrl} alt="" />
    </figure>
  </div>
);

const EventCardText = ({ eventUrl, eventTitle, eventPlace }: EventTextTypes) => (
  <div className="flex-2 flex flex-col justify-center items-start gap-y-2.5 px-4 lg:pr-0 lg:pl-12">
    <Link
      to={eventUrl}
      title={eventTitle}
      className={cn(
        "text-[clamp(1rem,3vw,1.5rem)] text-bone-800 hover:text-chocolate-300 font-inter",
        "font-bold uppercase leading-none -tracking-wide transition-colors duration-300"
      )}
    >
      {eventTitle}
    </Link>
    <ul className="text-bone-600 font-medium leading-5">
      <li className="flex text-xs sm:text-base justify-start items-center gap-x-1">
        <MapPin className="text-mate-duo-400" />
        {eventPlace}
      </li>
    </ul>
  </div>
);

const EventCard = ({
  eventTime,
  eventDay,
  eventMonth,
  eventImageUrl,
  eventUrl,
  eventTitle,
  eventPlace,
}: EventCardTypes) => {
  return (
    <EventCardContainer>
      <EventCardTime datetime={eventTime} day={eventDay} month={eventMonth} />
      <EventCardImage eventImageUrl={eventImageUrl} />
      <EventCardText eventUrl={eventUrl} eventTitle={eventTitle} eventPlace={eventPlace} />
    </EventCardContainer>
  );
};

export default EventCard;
