#!/usr/bin/python3
# Run with $ python3 hello.py

from tkinter import *
from tkinter import ttk

class HelloApp:
    def __init__(self, master):

        self.label = ttk.Label(master, text = "Hello, World!")
        self.label.grid(row = 0, column = 0, columnspan = 2)

        ttk.Button(master, text = "Romania",
                   command = self.romania_hello).grid(row = 1, column = 0)

        ttk.Button(master, text = "USA",
                   command = self.usa_hello).grid(row = 1, column = 1)

    def romania_hello(self):
        self.label.config(text = 'Hello, Romania!')

    def usa_hello(self):
        self.label.config(text = 'Hi, USA!')


def main():

    root = Tk()
    app = HelloApp(root)
    root.mainloop()

if __name__ == "__main__": main()
