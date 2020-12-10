import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPrice, setUrl, setItems } from '../reducers/watcherReducer';
import watcherService from '../services/watcher';
import {
  addNotification,
  RemoveNotification,
  setColor,
  setTimeoutId,
} from '../reducers/notificationReducer';

export default function AddWatcher() {
  const url = useSelector((state) => state.watchers.url);
  const price = useSelector((state) => state.watchers.price);
  const notification = useSelector((state) => state.notification);
  const dispatch = useDispatch();

  const [addWatcherBtnText, setAddWatcherBtnText] = useState('Add Watcher');

  const handleAddWatcher = async (e) => {
    e.preventDefault();
    setAddWatcherBtnText('Adding Watcher...');
    const newWatcher = {
      url,
      maxPrice: price,
    };
    // clear timeout before creating a new timeout this clears if successive clicks from user
    clearTimeout(notification.timeoutId);
    try {
      const res = await watcherService.addWatcher(newWatcher);
      const update = await watcherService.getWatchers();
      // clear the inputs after adding the new watcher
      dispatch(setUrl(''));
      dispatch(setPrice(''));
      dispatch(setItems(update));
      //show notification for adding the new watcher
      dispatch(setColor('green'));
      dispatch(addNotification('Watcher added successfully'));
      const timeoutId = setTimeout(() => dispatch(RemoveNotification()), 2000);
      dispatch(setTimeoutId(timeoutId));
    } catch (err) {
      console.log(err);
      //show notification for error in adding the new watcher
      dispatch(setColor('red'));
      dispatch(addNotification('There was an error while adding the watcher please try again'));
      const timeoutId = setTimeout(() => dispatch(RemoveNotification()), 2000);
      dispatch(setTimeoutId(timeoutId));
    }
    //change the button text back to Add Watcher
    setAddWatcherBtnText('Add Watcher');
  };

  return (
    <div className="addwatcher">
      <div className="inputSet">
        <label>URL</label>
        <input
          type="text"
          onChange={(e) => dispatch(setUrl(e.target.value))}
          value={url}
          className="inputText urlInput"
        />
      </div>
      <div className="inputSet priceInputRow">
        <label>Price</label>
        <input
          type="text"
          onChange={(e) => dispatch(setPrice(e.target.value))}
          value={price}
          className="inputText priceInput"
        />
      </div>
      <button className="btn addwatcherbtn" onClick={handleAddWatcher}>
        {addWatcherBtnText}
      </button>
    </div>
  );
}
