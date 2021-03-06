import React from "react";
import classNames from "classnames";
import Moment from "react-moment";
import { Link } from "react-router-dom";

export default function LaunchItem({
  launch: { flight_number, mission_name, launch_date_local, launch_success }
}) {
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <h4>
            Mission:{" "}
            <span
              className={classNames({
                "text-primary": launch_success,
                "text-danger": !launch_success && launch_success !== null,
                "text-info": launch_success === null
              })}
            >
              {mission_name}
            </span>
          </h4>
          <p>
            Date:{"  - "}
            <Moment format="YYYY-MM-DD  -  ">{launch_date_local}</Moment>
            Time:{"  "}
            <Moment format="HH:mm">{launch_date_local}</Moment>
          </p>
        </div>
        <div className="col-md-3">
          <Link
            to={`/launch_${flight_number}`}
            className={classNames({
              btn: true,
              "btn-primary": launch_success,
              "btn-danger": !launch_success && launch_success !== null,
              "btn-info": launch_success === null
            })}
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
