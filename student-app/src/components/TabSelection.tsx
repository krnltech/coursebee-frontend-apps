import clsx from "clsx";
import React from "react";

interface Props {
  tabs: any;
  currentTab: any;
  setCurrentTab: any;
}
const TabSelection = ({ tabs, currentTab, setCurrentTab }: Props) => {
  return (
    <div>
      <div className="block">
        <div className="border-b border-gray-200">
          <nav className="flex gap-6 -mb-px" aria-label="Tabs">
            {tabs.map((tab: any, index: number) => (
              <li
                key={index}
                className={clsx(
                  "tab-item",
                  currentTab === tab && "tab-item-active"
                )}
                onClick={() => setCurrentTab(tab)}
              >
                {tab}
              </li>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default TabSelection;
