---
title: The Syncthing Story
description: How to synchronize your devices sans cloud. and for your educational enlightenment.
date: '2024-9-10'
categories:
  - technology
  - lofi
published: true
---

![Syncthing](Syncthing-Logo.svg)
### What is Syncthing?
Syncthing is an application written in Go that lets you synchronize your files across multiple devices. Creation events, file changes and deletions on one machine will automatically be replicated to your other devices. The creators of Syncthing believe your data is your data alone and you deserve to choose where it is stored. Consequently, Syncthing does not upload your data to the cloud but exchanges your data across your machines as soon as they are online at the same time.

I came across Synthing as I was researching how to synchronize two computers. I wanted to synchronize my Obsidian notes across two computers. What I write on one computer in a specific vault gets automatically synched with the other computer. I installed it, 'registered' each compute or device and set it to turn on when I logged in and I now have automated synchronization of my Obsidian notes across my work Mac and my personal Mac.

From the FAQ:
> For a connection to be established, both devices need to know about the other’s device ID. It’s not possible (in practice) to forge a device ID. (To forge a device ID you need to create a TLS certificate with that specific SHA-256 hash. If you can do that, you can spoof any TLS certificate. The world is your oyster!)


Syncthing works by allowing devices to connect directly to each other, instead of storing files on a server. This means that if all the devices are on the same network, the files never leave that network. Syncthing can also work remotely over the internet. Syncthing runs on Windows, MacOS, Linux, Android, Solaris, Darwin and BSD.

AI Content ahead...

![gemini sparkle](gemini_sparkle.svg)

I thought to try out Google's gemini to get another perspective on Syncthing:
```
Input:
Write an article about Syncthing that is humorous and
technical but doesn't look like an AI wrote it
```
```
Output:
```

```
⚜️ Syncthing: Less Cloud, More Sharing, Maximum Sass

In the age of digital hoarding, keeping your precious 
cat videos and tax documents synchronized across a 
menagerie of devices can feel like herding squirrels 
with a pogo stick. Cloud storage solutions abound, 
but some folks just don't trust their meme collection
to a company that might be more interested in selling
your data than safeguarding it. Enter Syncthing,
the open-source file syncing champion that's 
about as cloud-based as a submarine.

Here's the gist: Syncthing cuts out the middleman 
(read: no intrusive cloud servers) and turns your 
devices into a private file-sharing network. It 
uses fancy cryptography (don't worry, it's not magic
spells) to verify that your files are identical 
across your devices. Any discrepancies? Syncthing
swoops in like a digital janitor, tidying things up
faster than you can say "redundancy."

But Syncthing isn't all business. It's got a bit of 
a mischievous streak. Let's say you accidentally delete
that crucial work document on your laptop. Syncthing,
in its infinite wisdom, will gleefully erase it from
all your other devices too, ensuring a truly universal
"oh crap" moment. (Hey, at least you'll be misery 
loves company with all your devices?)

Now, the technical crowd might be wondering:
"But how does it REALLY work?" Buckle up, because
Syncthing's got a few tricks up its sleeve.
It chops your files into bite-sized chunks 
(think digital salami) and checks their fingerprints
(cryptographic kind, not the CSI variety) to see
if they match across your devices. Any mismatched bits?
Syncthing beams them over like a data Robin Hood,
stealing from the disorganized and giving to the
data-starved.

So, is Syncthing perfect? Not quite. Setting it up
might feel like deciphering ancient hieroglyphics
at first, and it requires a bit more technical
know-how than your average cloud storage solution.
But for the privacy-conscious control freaks out there,
Syncthing offers the satisfaction of being your own 
data overlord. Just be sure to hit that "ignore deletions"
button if you're prone to digital disasters.

At the end of the day, Syncthing is a quirky, powerful
tool that puts the "you" in "your data." So, ditch
the cloud if you dare, and embrace the glorious, 
self-hosted world of file synchronization. 
Just remember, with great power comes great 
responsibility (and the potential for hilarious 
data mishaps).
```
 Now I don't consider data mishaps hilarious so a bit of a lack of empathy there but the value here is another perspective on Syncthing.

 Syncthing was initially released in 2013 so it has been around for a while and quite mature. You can check out the source code yourself. Here is the github repository: https://github.com/syncthing/syncthing/

 I've been using Syncthing for several months now and it works perfectly. I will be delving into conflict resolution and merging of different versions of files soon. 
