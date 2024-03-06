const users  = require('../../model/User');
const texts = require('../../model/text');

const output = {
 
    hello : (req,res) =>{
        res.render('./home.ejs');
    },

    login : (req,res) =>{
        res.render('./login.ejs');
    },

    register: (req,res) =>{
        res.render("./register.ejs");
    },

    routine : (req,res) => {
        res.render('./routine.ejs');
    },

    new : (req,res) =>{
        res.render('./new_routine.ejs')
    },

    update:(req, res) => {
        res.render('./update_routine.ejs');
    }

}

const process = {


    login : async (req,res) =>{

        const user = new users(req.body);
        const response = await user.login();
        return res.json(response);

    },

    register : async (req, res)=>{
        const user = new users(req.body);
        const response = await user.register();
        return res.json(response);
    },

    new : async (req,res) => {
        const text = new texts(req.body);
        const response = await text.new();
        return res.json(response);
    },

    routine: async (req,res) => {
        const text = new texts(req.body);
        const response = await text.show();
        return res.json(response);
    },

    delete: (req,res)=>{
        const text = new texts(req.body);
        const response = text.delete();
        return res.json(response);
    },

    save:async (req,res)=>{
        const text = new texts(req.body);
        const response = await text.update();
        return res.json(response);
    }

}

module.exports = {output, process};