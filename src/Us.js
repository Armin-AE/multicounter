import React from "react";
import { useEffect, useState, useMemo } from "react";
const Us = () => {
  const [timer, setTimer] = useState([
    { time: 0, flag: true },
    { time: 0, flag: false },
    { time: 0, flag: false },
  ]);
  var t;
  useEffect(() => {
    if (timer[0].flag) {
      t = setInterval(() => {
        setTimer((last) => {
          const help = JSON.parse(JSON.stringify(last));
          help[0].time += 1;
          help[1].flag = false;
          help[2].flag = false;
          return help;
        });
      }, 1000);
    } else if (timer[1].flag) {
      t = setInterval(() => {
        setTimer((last) => {
          const help = JSON.parse(JSON.stringify(last));
          help[1].time += 1;
          return help;
        });
      }, 1000);
    } else if (timer[2].flag) {
      t = setInterval(() => {
        setTimer((last) => {
          const help = JSON.parse(JSON.stringify(last));
          help[2].time += 1;
          help[1].flag = false;
          help[0].flag = false;
          return help;
        });
      }, 1000);
    }
    return () => clearInterval(t);
  }, [timer]);
  return (
    <div className="cont">
      <div>
        <p>{timer[0].time}</p>
        <button
          onClick={() => {
            if (!timer[2].flag) {
              setTimer((last) => {
                const help = JSON.parse(JSON.stringify(last));
                help[1].flag = true;
                help[0].flag = false;
                help[2].flag = false;
                return help;
              });
            }
          }}
        >
          Next
        </button>
      </div>
      <div>
        <p>{timer[1].time}</p>
        <button
          onClick={() => {
            if (!timer[2].flag) {
              setTimer((last) => {
                const help = JSON.parse(JSON.stringify(last));
                help[0].flag = true;
                help[1].flag = false;
                help[2].flag = false;
                return help;
              });
            }
          }}
        >
          Pre
        </button>
        <button
          onClick={() => {
            if (!timer[0].flag) {
              setTimer((last) => {
                const help = JSON.parse(JSON.stringify(last));
                help[2].flag = true;
                help[1].flag = false;
                help[0].flag = false;
                return help;
              });
            }
          }}
        >
          Next
        </button>
      </div>
      <div>
        <p>{timer[2].time}</p>
        <button
          onClick={() => {
            if (!timer[0].flag) {
              setTimer((last) => {
                const help = JSON.parse(JSON.stringify(last));
                help[1].flag = true;
                help[0].flag = false;
                help[2].flag = false;
                return help;
              });
            }
          }}
        >
          Pre
        </button>
      </div>
    </div>
  );
};

export default Us;
