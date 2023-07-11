'use strict';

const createKey = require('../modules/createkey')
const Key = require('../models/keys')

const controllers = {
    about: (req, res) => {
        const aboutInfo = {
            name: "Private/Public Keypair API Service",
            version: 1.00,
            desc: "CREATE, DELETE AND UPADTE AND RETRIEVE SSH KEYPAIRS",
            author: "Sony UKTec",
            endpoints : {
                GET: "getKeys",
                GET: "getKeyPair?hostname=",
                GET: "deletekey?hostname=",
                POST: "createkey (hostname)",
            }
        }
        res.json(aboutInfo);
    },
    getKeys: (req, res) => {
        try {
          Key.find()
            .then((result) => {
                res.status(200).send(result);
            })
            .catch((err) => {
              res.status(404).send(err)
            });
        } catch (err) {
          return res.status(500).json({
            message: err,
          });
        }
    },
    getKeyPair: (req, res) => {
        try {
          let { hostname } = req.query;
          if (!hostname) {
            return res.status(400).json({ 
              message: 'Hostname query parameter is required.' 
            });
          }          
          hostname = hostname.replace(/"/g, '');
          Key.findOne({hostname})
            .then((result) => {
              res.status(200).json({
                message: result
              });
            })
            .catch((err) => {
              res.status(400).json({
                message: err
              });
            });
        } catch (err) {
          return res.status(500).json({
            message: "Cannot get Key Pair" + err
          });
        }
    },  
    createkey: (req, res) => {
        try{
            const hostname = req.params.hostname;
            const document = createKey(hostname);
            
            if(!document){
                return res.status(400).json({
                    message: "Error Creating Key Pair",
                });
            }
            const key = new Key({
                hostname: hostname,
                publicKey: document.public,
                privateKey: document.private
            });

            key.save()
                .then((result) => {
                    res.status(200).json({
                        message: "Successfully Created Key Pair"
                    });
                })
                .catch((err) => {
                    res.status(404).json({
                        message: err
                    });
                });
        }
        catch(err){
            return res.status(500).json({
                message: err
            });
        }
    },
    deleteKey:(req, res) => {
      try {
        let { hostname } = req.query;
        if (!hostname) {
          return res.status(400).json({ 
            message: 'Hostname query parameter is required.' 
          });
        }
         Key.deleteOne({hostname})
         .then((result) => {
          res.status(200).json({
            message: result
          });
        })
        .catch((err) => {
          res.status(400).json({
            message: err
          });
        });     
      }
      catch(err){
        return res.status(500).json({
          message: err
        });
      }
    }
};
module.exports = controllers;
// https://www.youtube.com/watch?v=bxsemcrY4gQ - 24.05