import React, { useState } from "react";
import Head from "next/head";
import axios from "axios";
import Link from "next/link";
import styles from "@/styles/mystyle/App.module.css";
import { BsFillArrowDownRightCircleFill } from "react-icons/bs";
import Bottomfooter from '@/app/components/Bottomfooter';

export default function Home() {
  const [datas, setData] = useState([]);
  const [load, setLoad] = useState(0);
  const [inputurl, setInputurl] = useState("");
  const [datasetedd, setDatasetedd] = useState(0);
  const [vidInfos, setVidInfos] = useState([]);
  const [msg, setMsg] = useState('')

  const getData = async (e) => {
    e.preventDefault();

    if(inputurl===""){
      setMsg('Please paste video url before......')
    }else{
    
    setMsg('')
    setDatasetedd(0);
    setLoad(1);
    
    await axios
      .get("http://127.0.0.1:8000/get_all_format/" + inputurl)
      .then((response) => {
        console.log(response.data.data);
        setLoad(0);
        setData(response.data.data);
        setVidInfos(response.data.video_infos);
        setDatasetedd(1);
      });
    }
    
  };


  const getDataOnPaste =  (e) => {
    e.preventDefault();
    let paste = (event.clipboardData || window.clipboardData).getData('text');
    setMsg('')
    setDatasetedd(0);
    setLoad(1);
    axios
      .get("http://127.0.0.1:8000/get_all_format/" + paste)
      .then((response) => {
        console.log(response.data.data);
        setLoad(0);
        setData(response.data.data);
        setVidInfos(response.data.video_infos);
        setDatasetedd(1);
      });
      setInputurl(paste)
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Downloader" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicons.png" />
      </Head>

      <main className={styles.mainContent}>
        <div className={styles.container}>
          <div className={styles.title}>
            <h1>Download Video and Audio from YouTube</h1>
          </div>

          <div className={styles.search}>
            <input
              type="text"
              placeholder="Paste here YouTube link................."
              style={{
                height: "35px",
              }}
              onChange={(e) => {
                setInputurl(e.target.value);
              }}
              value={inputurl}
              onPaste={getDataOnPaste}
            />

            

            <button className={styles.btnsearch} onClick={getData}>
              Start <BsFillArrowDownRightCircleFill />
            </button>

          </div>
            <p style={{
              color:"orange",
              textAlign:"center",
              marginTop:"10px"
            }}>{msg}</p>
          {load ? (
            <div className={styles.loadingIn}>
              <img src="/ellipse.gif" width="100px"/>
            </div>
          ) : (
            ""
          )}

          {datasetedd ? (
            <div>
              <div className={styles.infosDiv}>
                <div className={styles.infosDiv_img}>
                  <Link href={inputurl} target={"_blank"}>
                    <img src={vidInfos.Video_thumbnail} />
                  </Link>
                </div>
                <div className={styles.infosDiv_news}>
                  <p>{vidInfos.Video_title}</p>
                  <h2>{vidInfos.Video_channel}</h2>
                </div>
              </div>

              <div className={styles.lines}></div>

              <div className={styles.results}>
                {datas.map((item) => {
                  return (
                    <div className={styles.res} key={item.format_id}>
                      <h1>File type</h1>
                      <p>{item.ext}</p>
                     
                      <h2>{item.format} </h2>
                      <Link href={item.url} download="Yego">
                        <button>Download</button>
                      </Link>{" "}
                    </div>
                  );
                })}
                
              </div>
              <div className={styles.lines}></div>
              <br />
            </div>
          ) : (
            ""
          )}
          <div className={styles.quickinfos}>
            <div className={styles.left}>
              <h1>Instructions</h1>
              <ul>
                <li>Search by name or directly paste the link of video you want to convert</li>
                <li>Click "Start" button to begin converting process</li>
                <li>Select the video/audio format you want to download, then click "Download" button</li>
              </ul>
            </div>
            <div className={styles.right}>
            <h1>Features</h1>
              <ul>
                <li>Unlimited downloads and always free</li>
                <li>High-speed video converter</li>
                <li>No registration required</li>
              </ul>
            </div>
            
          </div>
          <Bottomfooter/>
        </div>
      </main>
    </>
  );
}
