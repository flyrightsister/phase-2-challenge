When you run a command in the terminal, where does BASH look for that command?
  BASH looks in the environment variable PATH for possible paths to the command. (Commands have paths because they are actually programs, so must reside in a directory like any other program.

On a UNIX computer, how do you stop a running process?
  There are apparently many ways, but mainly use two. Control-c is the usual way I do it when there's a process running in my current terminal window that I want to stop and can't, don't remember, or don't feel like typing the appropriate command like 'exit'.

  The other way that I use occasionally is kill. I use kill as a last resort to stop a process that continues to run in the background when I'm unable to use control-c to stop it. To do this, I first type ps the terminal (or ps -e if I don't see the process listed), locate the PID of the process I want to kill, then type kill -9 [the PID number] to kill the process,

What packages do you have installed via homebrew?
  Kelceys-MBP:phase-2-challenge kelceywilson$ brew list
  autoconf                libgpg-error            pkg-config
  automake                libksba                 postgresql
  coreutils               libpng                  python
  gdbm                    libtool                 readline
  git                     libyaml                 ruby
  graphviz                mongodb                 sqlite
  hub                     mysql-connector-c       xz
  icu4c                   openssl

On a UNIX computer, how do you find the process id of a running process?
  Type ps in the terminal window, or ps -e if I'm really going deep.

In a terminal, what does control-c do?
  Aborts the current process.

In a terminal, what does control-a do?
  Puts the cursor at the beginning of the line.

In a terminal, what does control-e do?
  Puts the cursor at the end of the line.

What keyboard shortcut do you use to split the screen in your editor?
  control-k then an arrow key to correspond to the direction to split

What keyboard shortcut do you use to split the screen in your terminal?
  command-d to split right, command-shift-d to split down

When a terminal command completes, how can you tell if it was successful or not?
  Um... when it performs the command (sometimes it isn't obvious, like mkdir, touch, etc., and I have to list the directory, etc.), or returns an error and cursor, or locks up or does something weird I don't understand and I have to hit control-c or kill the process in another way.

What does your ~/.gitconfig have in it? (paste the whole file here)
  [filter "lfs"]
          clean = git-lfs clean %f
          smudge = git-lfs smudge %f
          required = true
  [user]
          name = Kelcey Wilson
          email = kelceywilson@gmail.com\n

  [color]
          ui = auto
  [merge]
          tool = opendiff

What is the difference between a relative and absolute path?
  A relative path is a path relative to the current location.
  An absolute path is the path from the home directory.

Lets say you have the following file structure

~
└── Projects
    ├── pinterest-for-dogs
    │   ├── README.md
    │   └── package.json
    └── linkedin-for-dancers
        ├── README.md
        └── package.json
And you were in the linkedin-for-dancers folder. What command would you use to change folders to the pinterest-for-dogs folder?
  I'd use the relative path (up one level, then into pinterest-for-dogs):
    ../pinterest-for-dogs

What keyboard shortcut do you use, in your editor, to go to a file in the project you have open?
  command-option-[left or right arrow key to step through open tabs]
  command-p then start typing the name of the file, including path if necessary, arrow to it if desired, hit return.

What files or folders do you want all git repositories to ignore?
  Files and folders that have sensitive information like passwords, and that are packages that should be installed on individuals' computers rather than wasting space on sites like GitHub, such as those listed in package.json and installed with npm install.

What is the main difference between == and === in JavaScript?
  The main difference is that === (strict equality) tests whether two entities are equal without type conversion, whereas == will consider whether entities are equal allowing type conversions.

  Example:
  1 == '1'  // true because the string usually gets converted to a number
  1 === '1' // false because one is a number and the other is a string
