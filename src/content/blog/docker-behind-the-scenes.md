---
title: "Docker - What's behind the scenes in Linux?"
description: "Here are the linux features that enabled the development of Docker."
pubDate: "2025-03-05"
image: "/docker.png"
keywords: [
    docker,
    containerization,
    linux
    software development,
  ]
---

# Docker

It uses **namespaces** and **cgroups** in order to implement container isolation and host resource delivering, like in Linux Kernel.

## Linux kernel

cgroups and namespaces are powerful tools for managing resources and isolating processes in Linux systems.
Together they provide a robus solution for resource management and isolation.

When you run a container, Docker creates a set of namespaces for that container, these layers provide a layer of isolation where each aspect of the container will run in.

## cgroups

cgroups, or control groups, are a Linux kernel feature that enables the management and limitation of system resources like CPU, memory, and network bandwidth, among others. We can use cgroups to set limits on these resources and distribute them among different groups of processes.

cgroups have a hierarchical structure with root and child, each with resource limits set by controllers — for example, a CPU controller for CPU time or a memory controller for memory.

We can use cgroups for various purposes, such as controlling resource usage in a multi-tenant environment, providing Quality of Service (QoS) guarantees, and running containers.

## namespaces

namespaces are a Linux Kernel functionality used to create isolated environments for processes, separating them from the host system and other processes.
They provide each process its own isolated file system, network, hostname and more, this way processes do not affect each other.

There are several types of them available in Linux, such as:

- **Mount**: isolates a process’s view of the filesystem hierarchy enabling each process to have its own mount point and file system view, each namespace can only access or modify files under its mount point (each namespace has its own view of the filesystem and can access it with different permissions)
- **PID**: isolates a process’s view of the process tree, meaning each namespace has its own set of PIDs that can access preventing processes from different namespaces to interact with each other. (multiple container can run without conflicting on IPs)
- **Network**: isolates a process’s view of the network stack, each namespace has its own network stack composed of network interfaces, routing tables and firewall rules. (each container can have its own network configuration)
- **UTS**: The UTS (UNIX Time-Sharing System) namespace isolates system identifiers, such as the hostname and domain name (each container can have its own hostname and domain)
- **IPC**:it segregates IPC mechanisms like message queues, shared memory, and semaphores. (each container has its own IPC)
- **User**: user and group ID isolation, allowing processes to run with different user and group privileges within separate namespaces. This namespaces maps user and group IDs in a namespace to different user and group IDs on the host system, enhancing security.
- **Time namespace**: each namespace can have a different time view, by changing time zone etc.

Namespaces are combined with cgroups to provide container isolation and management

## cgroups vs namespaces

cgroups are used to distribute resources like CPU, memory, I/O, network bandwidth among groups of processes, using root and child groups and controllers, they are usually used in multi-tenant environments and container execution.

Namespaces instead create isolation between processes and the host system, in order to make the process not to affect other processes.

## Docker Objects

**Images**: An image is a read-only template with instructions for creating a Docker container. Often, an image is based on another image, with some additional customization.

**Container**: running version of an image.

**Volumes**: connect specific filesystem paths of the container on the host machine.
There are two types of volumes:

- **bind mount** when we map the volume on a specific host's path. The container will be able to see all the changes performed on the host machine, and manage file as well (depending on the `:rw` permission we set previously).
- **named volume** docker chooses where to store the container volume on the host machine

### Networks

Container networking refers to the ability for containers to connect to and communicate with each other, or to non-Docker workloads.

Containers have networking enabled by default, and they can make outgoing connections. A container has no information about what kind of network it's attached to, or whether their peers are also Docker workloads or not. A container only sees a network interface with an IP address, a gateway, a routing table, DNS services, and other networking details. That is, unless the container uses the `none` network driver.

Once connected to the same network, containers can communicate with each other by using their IP or container name.

Network drivers:

- **bridge** default network driver
- **host** removes network isolation between Docker host and container
- **none** isolate container from others and the host
- **overlay** connect multiple Docker daemons together.
- **macvlan** assign a MAC Address to a container
- **ipvlan** provides full control over ipv4 and ipv6 addressing.

`-p 192.168.1.100:8080:80` map port `8080` on the Docker host IP `192.168.1.100` to TCP port `80` in the container.

Publishing container ports is **insecure by default**. Meaning, when you publish a container's ports it becomes available not only to the Docker host, but to the outside world as well so if you include the localhost IP address (`127.0.0.1`, or `::1`) with the publish flag, only the Docker host and its containers can access the published container port.

```shell
docker run -p 127.0.0.1:8080:80 -p '[::1]:8080:80' nginx
```

By default, the container gets an IP address for every Docker network it attaches to. A container receives an IP address out of the IP subnet of the network. The Docker daemon performs dynamic subnetting and IP address allocation for containers. Each network also has a default subnet mask and gateway.
