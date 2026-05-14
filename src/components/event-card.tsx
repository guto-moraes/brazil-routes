import { Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import type { EventCardTypes, EventTextTypes, EventTimeTypes } from "@/types/components-types";

const EventCardContainer = ({ children }: { children: React.ReactNode }) => (
  <article className="rounded-2xl shadow-lg bg-tan-100 flex divide-x divide-dashed divide-tan-200 py-4 px-8">
    {children}
  </article>
);

const EventCardTime = ({ datetime, day, month }: EventTimeTypes) => {
  return (
    <time className="text-tan-400 flex flex-col justify-center items-center gap-y-px pr-12" dateTime={datetime}>
      <span className="text-5xl font-bold -tracking-widest">{day}</span>
      <span className="text-xl font-bold uppercase tracking-tight">{month}</span>
    </time>
  );
};

const EventCardImage = ({ eventImageUrl }: { eventImageUrl: string }) => (
  <div className="flex-1 flex justify-center items-center">
    <figure className="rounded-2xl h-24 w-36 overflow-hidden">
      <img className="h-full w-full object-cover object-top-left" src={eventImageUrl} alt="" />
    </figure>
  </div>
);

const EventCardText = ({ eventUrl, eventTitle, eventPlace }: EventTextTypes) => (
  <div className="flex-2 flex flex-col justify-center items-start gap-y-2.5 pl-12">
    <Link to={eventUrl} title={eventTitle}>
      <h2 className="text-2xl text-bone-800 font-inter font-bold uppercase leading-none -tracking-wide">
        {eventTitle}
      </h2>
    </Link>
    <ul className="text-bone-600 font-medium leading-5">
      <li className="flex justify-start items-center gap-x-1">
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
