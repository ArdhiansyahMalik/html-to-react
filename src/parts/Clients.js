import React from 'react'
import Section from 'elements/Section'
import Fade from 'react-reveal/Fade'
import Client01 from 'assets/images/clients-01.svg'
import Client02 from 'assets/images/clients-02.svg'
import Client03 from 'assets/images/clients-03.svg'
import Client04 from 'assets/images/clients-04.svg'
import Client05 from 'assets/images/clients-05.svg'

export default function Clients() {
    return (
        <Section className="clients">
            <div className="container">
				<div className="clients-inner section-inner has-top-divider has-bottom-divider">
					<ul className="list-reset">
                        <li>
                            <Fade left delay={1500}>
    							<img src={Client01} alt="Clients 01"/>
                            </Fade>
						</li>
						<li>
                            <Fade left delay={1500}>
	    						<img src={Client02} alt="Clients 02"/>
                            </Fade>
						</li>
						<li>
                            <Fade bottom delay={1500}>
    							<img src={Client03} alt="Clients 03"/>
                            </Fade>
						</li>
						<li>
                            <Fade right delay={1500}>
							    <img src={Client04} alt="Clients 04"/>
                            </Fade>
						</li>
						<li>
                            <Fade right delay={1500}>
							    <img src={Client05} alt="Clients 05"/>
                            </Fade>
						</li>
					</ul>
				</div>
			</div>
        </Section>
    )
}
