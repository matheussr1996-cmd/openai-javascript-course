export default function handler(req,res){
    console.log("i am a api route")
    const { lastName , key } = req.body;


    res.status(200).json({ result: `Your last name ${lastName} is awesome!`})
}