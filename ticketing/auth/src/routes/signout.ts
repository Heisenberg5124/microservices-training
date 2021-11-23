import { requireAuth } from '@vdhticketing/common';
import express from 'express';

const router = express.Router();

router.post('/api/users/signout', requireAuth, (req, res) => {
    req.session = null;

    res.send({});
});

export { router as signoutRouter };