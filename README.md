# ClashBoard

A free, no-sign-up timetable clash checker for University of Ghana students. Add your course groups and times, and instantly see if any two classes overlap — rendered as a station-style split-flap departure board.

**Live tool:** add your `username.github.io/clashboard` link here once deployed.

## Features

- Add courses with code, group/section, day, time, and venue
- Automatic clash detection across your whole week
- Instant "would this clash?" checker for anything new you're considering (study group, part-time shift, extra course)
- Course-code suggestions pulled from UG's Level 100 catalog
- Everything runs client-side — your schedule is saved to your own browser only, nothing is sent anywhere

## Files

```
clashboard/
├── index.html         Main tool: add courses, weekly board, clash checker
├── about.html          About the project
├── privacy.html        Privacy policy
├── style.css           All styling
├── script.js           Clash-detection logic and rendering
├── courses-data.js     UG L100 course catalog + sample schedule
└── README.md
```

## Run it locally

No build step — it's plain HTML/CSS/JS. Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy free on GitHub Pages

1. Create a new GitHub repository (e.g. `clashboard`).
2. Push these files to the repo's `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: ClashBoard"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/clashboard.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**.
4. Under **Source**, choose the `main` branch and `/ (root)` folder, then **Save**.
5. Your site will be live at `https://YOUR_USERNAME.github.io/clashboard/` within a minute or two.

## Sharing on LinkedIn

Once deployed, a good post structure is: the problem (manually checking clashing course groups every semester), the fix (this tool), and the live link + a screenshot of the board with a clash highlighted. Tag it as a personal/student project.

## License

Free to use, fork, and adapt.
