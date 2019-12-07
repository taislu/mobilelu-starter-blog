---
title: "AWS Full Course Tutorial"
date: "2019-12-06"
description: This AWS full course will help you understand what is AWS (Amazon Web Services), how did AWS become so successful, the services that AWS provides, the future of AWS and a demonstration on deploying a web application in AWS. 
category: AWS
---

This AWS full course will help you understand what is **AWS (Amazon Web Services)**, how did AWS become so successful, the services that AWS provides (**AWS EC2, Amazon Elastic Beanstalk, Amazon Lightsail, Amazon Lambda, Amazon S3, Amazon Glacier, Amazon EBS, Amazon Elastic File System, Amazon RDS, Amazon Redshift**), the future of AWS and a demonstration on deploying a web application in AWS.   

Amazon Web services (AWS) provide a lot of benefits to a business organization. These benefits allow you to maximize your productivity and enhance efficiency. This AWS tutorial video is ideal for those who aspire to become **AWS Certified Solution Architect**.  

<iframe width="100%" src="https://www.youtube.com/embed/RLd_XTyt-w8" frameborder="0" allowfullscreen></iframe>

Why Cloud Computing? - 02:09   
What is AWS? - 26:52   
Use Case - Deploying web Application - 41:12   
What is AWS EC2 - 49:42   
EC2 Use Case - 50:37   
What is AWS Lambda - 1:11:00    
AWS Lambda Use Case - 1:16:35     
What is AWS S3 - 1:31:44    
Benefits of S3 - 01:33:15     
Object & Bucket in Amazon S3 - 1:35:28     
How does Amazon S3 work - 1:39:53    
Storage class in Amazon S3 with a "School" use case - 1:41:26      
What is AWS security? - 1:46:48     
Types of AWS security - 1:47:25     
Why IAM? - 1:48:21     
What is AWS IAM - 1:49:59      
How IAM works -1:50:43    
Components of IAM - 1:55:05     
Components of IAM - User - 1:55:36    
Components of IAM - Group - 1:57:41     
Components of IAM - Policies - 1:59:47    
Components of IAM - Roles - 2:04:22     
Features of IAM -2:09:56    
Demo - Create a S3 bucket using MFA feature - 2:13:46    
Demo - Multi-Factor Authentication - 2:14:22    
**Why use AWS CloudFormation - 2:27:34**    
What is AWS CouldFormation - 2:29:31     
How AWS CloudFormation work? - 2:33:24     
AWS CloudFormation Concepts - 2:34:42     
Templates - 2:34:57     
Template structure - 2:38:43     
Format version - 2:39:05     
Description - 2:39:27    
Metadata - 2:39:45    
Parameters - 2:39:59      
Mapping - 2:40:49      
Conditions - 2:41:03     
Transform - 2:42:49      
Resource - 2:43:25      
Output - 2:44:45      
Template Resource Attributes - 2:46:02      
CreationPolicy - 2:46:17      
DeletionPolicy - 2:47:24     
DependsOn - 2:48:20      
Metadata - Template Resource Attributes - 2:49:50      
UpdatePolicy - Template Resource Attributes - 2:50:22      
Stack - 2:51:13     
Nested Stack - 2:52:29     
Windows Stack - 2:53:08      
StackSets - 2:53:59     
CloudFormation Acess Control - 2:54:54     
Demo - LAMP stack on EC2 instance - 2:55:38    
Use case - Create a redeployable template - 3:03:59    
AWS Certifications - 3:07:00    
What is an AWS Certification? - 3:07:04    
Why is it important? - 3:07:46    
How to become a succesfull AWS Architect - 03:17:06    
Interview questions in AWS - 3:25:07 
End 5:57:09

### AWS Interview Q&As 

Q-1: Define and explain the 3 basic types of cloud services and the AWS products that are built on them
A: Compute ( EC2, Elastic Beanstalk, Lambda, Auto-scaling, Lightsail ), Storge ( S3, Glacier, Elastic Block Storage, Elastic File System ) , Networking ( VPC, CloudFront, Route53 )

Q-2: What is the relation between Availability Zone and Region
A: AWS Region is a separate geographic area (ex: US-WEST1 in North CA). Each AWS Region has multiple isolated locations known as Availability Zones. All availability zones inside one region are isolated from one another in terms of failure.

Q-3: What is auto-scaling
A: AWS auto-scaling allows you to configure and automatically provision and launch new instances whenever the demand increases. It also allows automatic decrease of resource capacity as per the needs.

Q-4: What is geo targeting and how do you setup geo targeting in CloudFront
A: Geo targeting is a concept where you can show personalized/specific content to your audience based on their geographic location without changing the URL. AWS CloudFront will detect the user’s contry and pass along their country code to you in the CloudFront-Viewer-Country header.

Q-5: What are the steps involved in a CloudFormation solution
A: 
1.	Create or use existing CloudFormation template using JSON/YAML format
2.	Save your code template locally or in S3 bucket
3.	Use AWS CloudFormation to create a stack on your template
4.	AWS CloudFormation constructs and configures your stack resources that you have specified in your template

Q-6: How do you upgrade or downgrade a system with near zero downtime
A: Launch & Install another EC2 instance with bigger capacity, test the instance, and than deploy the new instance (to replace the older instance)

The steps of migration : open ec2 console -> choose operating system AMI -> launch an instance with new instance type (capacity) -> install all updates -> install applications -> test the instance -> deploy the new instance and replace the older instance (ex: update route53 with the new instance’s ip or re-assign the static ip to the new instnace)

Q-7: What are all the tools and techniques you can use in AWS to identify and correct if you are paying more than you should be (or the tools used for managing cost)
A: Top Free Tier Services Table in Billing and Cost Management console, Cost Explorer, AWS Budgets, Cost Allocation Tags

Q-8: Are there any other alternate tools to log into the Cloud environment other than Console
A: Putty, AWS CLI for Linux, AWS CLI for Windows, AWS CLI for Windows CMD, AWS SDK, Eclipse

3:42:59
Q-9: What services can be used to create a centrialized logging solution
A: AWS CloudWatch Logs, CloudTrail (for API Calls)

3:46:00
Q-10: What are the native AWS Security logging capabilities
A: AWS CloudTrail (history of all API calls), Config, CloudFront, Redshift, RDS, VPC (flow logs), S3

3:48:00
Q-11: What is DdoS attack and what services can minimize DDoS attacks
A:    

