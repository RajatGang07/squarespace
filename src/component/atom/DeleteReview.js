import React from 'react';
import { connect } from 'react-redux';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../../constant/Color';
import { deleteReview } from '../../store/actions/questionAction';

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

const styles = StyleSheet.create({
    rightAction: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: Colors.red,
        padding: 15,
    },
    rightActionText: {
        color: Colors.white,
        fontSize: 18,
    },
});


export default connect(null, {
    deleteReviewAction: deleteReview
})(DeleteReview);

