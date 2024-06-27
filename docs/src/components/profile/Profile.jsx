import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Avatar, Button} from "@nextui-org/react";

function Profile() {
    const [isFollowed, setIsFollowed] = React.useState(false);

    function handlePress() {
        
    }

  return (
    <Card className="max-w-[440px]" >
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="lg" src="/src/assets/profile_pic3.svg" />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-large font-semibold leading-none text-default-600">Yosuf Kamandy</h4>
            <h5 className="text-medium tracking-tight text-default-400">@yosufkam</h5>
          </div>
        </div>
        <a href="mailto:josephkamandy@gmail.com">
            <Button
            //   className="bg-transparent text-foreground border-default-200"
            color="primary"
            radius="full"
            size="md"
            variant='solid'
            onPress={() => handlePress()}
            >
            Email
            </Button>
        </a>
      </CardHeader>
      <CardBody className="px-3 py-0 text-medium text-default-400">
        <p>
          Software developer and UI/UX enthusiast. Join me on this coding adventure!
        </p>
        {/* <span className="pt-2">
          #FrontendWithZoey 
          <span className="py-2" aria-label="computer" role="img">
            💻
          </span>
        </span> */}
      </CardBody>
      {/* <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">4</p>
          <p className=" text-default-400 text-small">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">97.1K</p>
          <p className="text-default-400 text-small">Followers</p>
        </div>
      </CardFooter> */}
    </Card>
  );
}

export default Profile
