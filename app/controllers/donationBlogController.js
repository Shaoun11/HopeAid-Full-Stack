import donationBlog from "../models/donationBlogModel.js";
// Controller for donation
export const donationBlogCreate = async (req, res) => {
    try {
        // Your Code Here
        const reqBody=req.body;
        const data = await donationBlog.create(reqBody);
       return res.status(200).json({status:"success",data:data})
        
    } catch (error) {
        return res.status(400).json({ status: "fail", data: error });
    }
};

export const donationBlogData = async (req, res) => {
    try {
        const data = await donationBlog.find();
        return res.status(200).json({ status: "success", data: data });
    } catch (error) {
        return res.status(400).json({ status: "fail", data: error });
    }
};



