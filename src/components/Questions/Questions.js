import React from 'react';
import { AnimationOnScroll  as Animation} from 'react-animation-on-scroll';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
const Questions = () => {
    return (
        <div className="question-area">
            <div className="container">
                <div className="title">
                    <h3>Frequently asked questions</h3>
                </div>
                <div className="question-ans">
                    <Accordion>
                        <Animation animateIn="animate__fadeInUp">
                            <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    What is StoVoo
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    StoVoo is a food service & delivery app bringing people and food together in an engaging, fun & exciting way. With features & earning opportunities, you would find anywhere else.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        </Animation>
                        <Animation animateIn="animate__fadeInUp">
                            <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    What is Quicksales
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    Quicksales is a 24-hour story feature that allows vendors to market perishable goods more engagingly, allowing users to order right from the story.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        </Animation>
                        <Animation animateIn="animate__fadeInUp">
                            <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    What Makes StoVoo Unique?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    We are not like any other food delivery or food service app; we pride ourselves as the food delivery space disruptor, from swift delivery to inclusiveness to additional earning streams & many more.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        </Animation>
                        <Animation animateIn="animate__fadeInUp">
                            <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Payment Methods
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    We believe the world is evolving hence stovoo allows our users the flexibility to pay as they wish, from credit cards to debit cards, cryptocurrencies & more.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        </Animation>
                    </Accordion>
                </div>
            </div>

        </div>
    );
};

export default Questions;