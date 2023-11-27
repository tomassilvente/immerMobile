import FAQ from "../components/FAQ";
interface faqs {
  title:string,
  desc:string
}
const FAQs = ({dataset}:{dataset:Array<faqs>}) =>{
    return (
        <div className=" flex flex-col gap-2">
          {
            dataset.map((faq, index)=>(
              <FAQ key={index} title={faq.title} desc = {faq.desc}/>
            ))
          }
        </div>
    )
}

export default FAQs;