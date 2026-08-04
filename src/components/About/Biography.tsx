import Image from "next/image";

export default function Biography() {
    return (
      <section>
        <div className="container">
            <Image src="/images/biography.jpg" alt="Biography" width={500} height={500} />
          <h1>My Story</h1>
  
          <p>
           Music has always <br /> been my language...</p>
  
          <p>
          I help singers <br /> discover their voice.
          </p>
        </div>
      </section>
    );
  }
  