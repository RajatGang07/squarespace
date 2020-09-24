import React from 'react';
import { connect } from 'react-redux';
import { Text,  TouchableOpacity } from 'react-native';

import styles from './styles';
import { deleteReview } from '../../../store/actions/questionAction';

handleSwipeRight = (id, reviewId, deleteReviewAction) => () => {
    console.log(deleteReviewAction, "deleteReviewAction");
    deleteReviewAction(id, reviewId);
};

const DeleteReview = ({ id, reviewId, onPress, deleteReviewAction, ...props }) => {
    return (
        <TouchableOpacity onPress={handleSwipeRight(id, reviewId, deleteReviewAction)} style={styles.rightAction}>
            <Text style={[styles.rightActionText]}>Delete</Text>
        </TouchableOpacity>
    );
};




export default connect(null, {
    deleteReviewAction: deleteReview
})(DeleteReview);

