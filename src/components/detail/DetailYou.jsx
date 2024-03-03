

const DetailYou = ({categ}) => {
    console.log(categ,"youtube")

    
  return (
    <div
        style={{
          width: "660px",
          height: "350px",
          border: "solid black 2px",
          marginLeft: "180px",
          marginTop: "22px",
          borderRadius:'10px'
        }}
      >
      
     
        <div>
        
          
        {categ === "laptops" ? (
          <p><iframe width="100%" height="346" src="https://www.youtube.com/embed/OB9w8iY9DCg?si=BeobPDBzVyb3smmu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></p>
        ) : categ === "fragrances" ? (
          <p><iframe width="100%" height="346" src="https://www.youtube.com/embed/9HgWxXjnows?si=2AhZbe2p8MxF-JXP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></p>
        ) : categ === "smartphones" ? (
          <p><iframe width="100%" height="346" src="https://www.youtube.com/embed/W1_GgiDKDeA?si=ml2l23qFkzAke_Hw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></p>
        ) : categ === "skincare" ? (
          <p><iframe width="100%" height="346" src="https://www.youtube.com/embed/0XDiG5lL0Dw?si=c1l2l3qqBo2pIJFx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></p>
        ) : null}
          
        </div>
      </div>
  )
}

export default DetailYou