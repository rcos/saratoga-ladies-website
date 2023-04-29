import styles from './section.module.css'
import Script from 'next/script'


import Image from 'next/image'
import ArticlePlaceholder from "@/images/ArticlePlaceholder.jpg";


import MultiHeader from "../../ui/multi-header.jsx"
import Button from "../../ui/button.jsx"

import { SectionTwoHeader, SectionTwoSubHeader, SectionTwoParagraph1, SectionTwoParagraph2 } from '@/text/homepage'

import toast, { Toaster } from 'react-hot-toast';

const SectionTwo = () => {

    return (
            <div className={styles['section-content-container']}>
                <div className={styles['section-first-container'] + ' saratoga-center'}>
                    <div className={styles['section-image-frame']} > 
                        {/* ----------- Auto Generated by Facebook developer tools ----------- */}
                        <div id="fb-root"></div>
                        <Script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v15.0" nonce="evQzI3UD" />
                        <div class="fb-page" data-href="https://www.facebook.com/NatCemSaratoga/" data-tabs="timeline" data-width="" data-height="1000px" data-small-header="false" data-adapt-container-width="false" data-hide-cover="false" data-show-facepile="false">
                            <blockquote cite="https://www.facebook.com/NatCemSaratoga/" className="fb-xfbml-parse-ignore">
                                <a href="https://www.facebook.com/NatCemSaratoga/">
                                    Gerald B.H. Solomon Saratoga National Cemetery
                                </a>
                            </blockquote>
                        </div>
                        {/* ^----^----^ Auto Generated by Facebook developer tools ^----^----^ */}
                    </div>
                </div>
                <div className={styles['section-second-container'] }>
                    <MultiHeader subText={SectionTwoSubHeader} >{ SectionTwoHeader }</MultiHeader> 
                    <p>{SectionTwoParagraph1}</p>
                    <p>{SectionTwoParagraph2}</p>
                    <div className={styles['section-small-article-section'] }>
                        <div className={styles['section-small-article'] }>
                            <Image src={ ArticlePlaceholder } alt="" />
                            <h3>News Post #1</h3> 
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                        </div>
                        <div className={styles['section-small-article'] }>
                            <Image src={ ArticlePlaceholder } alt="" />
                            <h3>News Post #2</h3> 
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                        </div>
                        <div className={styles['section-small-article'] }>
                            <Image src={ ArticlePlaceholder } alt="" />
                            <h3>News Post #3</h3> 
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                        </div>
                        <div className={styles['section-small-article'] }>
                            <Image src={ ArticlePlaceholder } alt="" />
                            <h3>News Post #4</h3> 
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                        </div>
                    </div>
                    <Button shape={"rectangle"} text={"See All News Articles"} ></Button>
                    
                </div>
            </div>
    )
}

export default SectionTwo