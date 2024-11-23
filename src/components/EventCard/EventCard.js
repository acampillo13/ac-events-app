import React from "react";
import Link from "next/link";
import styles from "./EventCard.module.scss";

const EventCard = ({ event }) => {
    return (
        <Link href={`/evento/${encodeURIComponent(event.slug)}`} passHref className="event-card__item col-sm-4">
            <figure className={styles["event-card"]}>
                <img
                    src={event.image}
                    alt={event.name}
                    className={styles["event-card__img"]}
                />
                <figcaption className={styles["event-card__details"]}>
                    <h4 className={styles["event-card__title"]}>{event.name}</h4>
                    <p className={styles["event-card__date"]}>{event.date}</p>
                    <p className={styles["event-card__place"]}>{event.place}</p>
                </figcaption>
            </figure>
        </Link>
    );
};

export default EventCard;