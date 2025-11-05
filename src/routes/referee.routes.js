const express = require('express');
const ctrl = require('../controllers/referee.controller');
const router = express.Router();

router.get('/:id/dashboard', ctrl.dashboard);
router.get('/:id/assignments', ctrl.assignments);
router.put('/:refId/assignments/:aId/accept', ctrl.accept);
router.put('/:refId/assignments/:aId/reject', ctrl.reject);
router.get('/:id/notifications', ctrl.notifications);
// src/routes/refereeRoutes.js
router.get('/:id/photo', async (req, res) => {
    const { id } = req.params;
    const refereePhotos = {
        1: 'https://esacosa.s3.us-east-1.amazonaws.com/images/1.jpg',
        2: 'https://esacosa.s3.us-east-1.amazonaws.com/images/2.jpg',
        3: 'https://esacosa.s3.us-east-1.amazonaws.com/images/3.jpg',
        4: 'https://esacosa.s3.us-east-1.amazonaws.com/images/4.jpg',
        5: 'https://esacosa.s3.us-east-1.amazonaws.com/images/5.jpg',
        6: 'https://esacosa.s3.us-east-1.amazonaws.com/images/6.jpg',
        7: 'https://esacosa.s3.us-east-1.amazonaws.com/images/7.jpg',
        8: 'https://esacosa.s3.us-east-1.amazonaws.com/images/8.jpg',
        9: 'https://esacosa.s3.us-east-1.amazonaws.com/images/9.jpg',
        10: 'https://esacosa.s3.us-east-1.amazonaws.com/images/10.jpg',
    };
    const photoUrl = refereePhotos[id];
    if (!photoUrl) return res.status(404).json({ message: 'Referee not found' });

    res.redirect(photoUrl);
});

module.exports = router;