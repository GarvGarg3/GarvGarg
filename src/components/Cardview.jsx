import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle, CardSubtitle } from "reactstrap";
import '../stylesheets/Achievementcard.css';

function Cardview({
    title,
    subtitle,
    image,
    cardText,
    children,
}) {
    return (
        <div className='achievementCard'>
            <Card className="bg-dark text-white">
                <CardImg
                    alt="Card image cap"
                    src={image}
                    top
                    width="100%"
                />
                <CardBody>
                    <CardTitle tag="h5" className="achievementCardTitle">
                        {title}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 achievementCardSubtitle"
                        tag="h6"
                    >
                        {subtitle}
                    </CardSubtitle>
                    <CardText className="achievementCardText">
                        {cardText}
                    </CardText>
                    {children}
                </CardBody>
            </Card>
        </div>
    );
}

export default Cardview;



