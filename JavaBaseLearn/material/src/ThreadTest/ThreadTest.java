package com.test.base.thread;

public class ThreadTest {
    public static void main(String[] args) {
        RunnerTest runnerTest = new RunnerTest();
        Thread thread = new Thread(runnerTest);
        thread.start();
        for (int i = 0; i < 100; i++) {
            System.out.println("main thread:"+i);
        }
    }
}

class RunnerTest implements Runnable{

    @Override
    public void run() {
        for (int i = 0; i < 100; i++) {
            System.out.println(i);
        }
    }
}