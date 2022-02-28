import express from 'express';
import diaryService from '../services/diaryService';


const diaryRouter = express.Router();

diaryRouter.get('/', (_req, res) => {
    res.send(diaryService.getNonSensitiveEntries());
});

diaryRouter.get('/:id', (req, res) => {
    const diary = diaryService.findById(Number(req.params.id));
    if(diary) {
        res.send(diary);
    } else {
        res.sendStatus(404);
    }
});

diaryRouter.post('/', (_req, res) => {
    res.send('Saving a diary!');
});

export default diaryRouter;