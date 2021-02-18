# Thread
---

## [Thread class and Runnable interface](material/src/ThreadTest/ThreadTest.java)

- A new thread start with 'start()' method in an object created by class Thread, Thread requires an object that implementing Runnable interface as parameter to construct

- Class Thread can be extended by a new class which want to start a new thread, then make an object of this new class and use method 'start()' to start;

- Second way to start new thread is not be recommended, Try to use the first way;

- Thread.join()
  - Making a running thread join the thread which calling this function
  - The thread which calls this function must wait until the rest of task of the thread created by function's object be done, then go ahead

- Thread.yield()
  - It's a static method in class Thread
  - Using it to pause this thread for milliseconds to let other thread run first

- Thread.priority()
  - This method make 