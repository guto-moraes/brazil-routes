import { Link } from "@tanstack/react-router";
import type { AppointmentCardTypes, AppointmentTextTypes, AppointmentTimeTypes } from "@/types/components-types";
import { cn } from "@/lib/utils";
import { MapPin } from "lucide-react";

const AppointmentCardContainer = ({ children }: { children: React.ReactNode }) => (
  <article
    className={cn(
      "rounded-2xl shadow-lg bg-tan-100 dark:bg-dark-800 flex flex-col md:flex-row max-sm:gap-y-4",
      "divide-x divide-dashed divide-tan-200 dark:divide-dark-700 py-4 px-4 lg:px-8",
    )}
  >
    {children}
  </article>
);

const AppointmentCardTime = ({ datetime, day, month }: AppointmentTimeTypes) => {
  return (
    <time
      className="text-tan-400 dark:text-dark-200 flex md:flex-col justify-center items-center max-sm:gap-x-2.5 gap-y-px md:pr-12"
      dateTime={datetime}
    >
      <span className="text-3xl md:text-5xl font-bold -tracking-widest">{day}</span>
      <span className="text-3xl md:text-xl font-bold uppercase tracking-tight">{month}</span>
    </time>
  );
};

const AppointmentCardImage = ({ eventImageUrl }: { eventImageUrl: string }) => (
  <div className="flex-1 flex justify-center items-center max-sm:px-4">
    <figure className="rounded-2xl h-40 w-full md:h-24 md:w-36 overflow-hidden">
      <img className="h-full w-full object-cover object-top-left" src={eventImageUrl} alt="" />
    </figure>
  </div>
);

const AppointmentCardText = ({ eventUrl, eventTitle, eventPlace }: AppointmentTextTypes) => (
  <div className="flex-2 flex flex-col justify-center items-start gap-y-2.5 px-4 lg:pr-0 lg:pl-12">
    <Link
      to={eventUrl}
      title={eventTitle}
      className={cn(
        "text-[clamp(1rem,3vw,1.5rem)] text-bone-800 dark:text-dark-contrast-100 hover:text-chocolate-300",
        "dark:hover:text-dark-300 font-inter font-bold uppercase leading-none tracking-tight transition-colors duration-300",
      )}
    >
      {eventTitle}
    </Link>
    <ul className="w-full text-bone-600 dark:text-white font-medium leading-5">
      <li className="flex justify-start items-center gap-x-1">
        <MapPin className="text-mate-400 dark:text-blue-retro-300" />
        <h3 className="text-xs sm:text-base sm:leading-none">{eventPlace}</h3>
      </li>
    </ul>
  </div>
);

const AppointmentCard = ({
  eventTime,
  eventDay,
  eventMonth,
  eventImageUrl,
  eventUrl,
  eventTitle,
  eventPlace,
}: AppointmentCardTypes) => {
  return (
    <AppointmentCardContainer>
      <AppointmentCardTime datetime={eventTime} day={eventDay} month={eventMonth} />
      <AppointmentCardImage eventImageUrl={eventImageUrl} />
      <AppointmentCardText eventUrl={eventUrl} eventTitle={eventTitle} eventPlace={eventPlace} />
    </AppointmentCardContainer>
  );
};

export default AppointmentCard;
