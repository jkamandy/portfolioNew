import React from "react";
import {Tabs, Tab, Card, CardBody, CardHeader} from "@nextui-org/react";

export default function NavTab() {
  let tabs = [
    {
      id: "photos",
      label: "Photos",
    },
    {
      id: "music",
      label: "Music",
    },
    {
      id: "videos",
      label: "Videos",
    }
  ];

  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Dynamic tabs" items={tabs}>
        {(item) => (
          <Tab key={item.id} title={item.label}>
            <Card>
              <CardBody>
                {item.content}
              </CardBody>
            </Card>  
          </Tab>
        )}
      </Tabs>
    </div>  
  );
}
