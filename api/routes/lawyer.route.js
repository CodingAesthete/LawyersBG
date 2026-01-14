import express from 'express';
import { getLawyers, getLawyer, createConsultation, contactLawyer } from '../controllers/lawyer.controller.js';

const router = express.Router();

router.get('/all', getLawyers);
router.get('/:id', getLawyer);
router.post('/consultation', createConsultation);
router.post('/contact', contactLawyer);

export default router;
