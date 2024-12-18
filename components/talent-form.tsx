'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Upload } from 'lucide-react'

export default function TalentForm() {
  const [phonePrefix, setPhonePrefix] = useState('+86')

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="space-y-2 mb-8">
        <h1 className="text-2xl font-semibold">真格人才库</h1>
        <p className="text-muted-foreground">请填写如下信息，加入真格人才库</p>
      </div>

      <form className="space-y-8">
        <div className="space-y-6">
          <h2 className="text-lg font-medium">个人信息</h2>
          
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">
                姓名 <span className="text-red-500">*</span>
              </Label>
              <Input id="name" placeholder="姓名" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">
                手机号码 <span className="text-red-500">*</span>
              </Label>
              <div className="flex gap-2">
                <Select value={phonePrefix} onValueChange={setPhonePrefix}>
                  <SelectTrigger className="w-[100px]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="+86">+86</SelectItem>
                    <SelectItem value="+1">+1</SelectItem>
                    <SelectItem value="+44">+44</SelectItem>
                  </SelectContent>
                </Select>
                <Input id="phone" placeholder="请输入手机号" className="flex-1" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">
                邮箱 <span className="text-red-500">*</span>
              </Label>
              <Input id="email" type="email" placeholder="邮箱" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="gender">
                性别 <span className="text-red-500">*</span>
              </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="请选择" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">男</SelectItem>
                  <SelectItem value="female">女</SelectItem>
                  <SelectItem value="other">其他</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="experience">
                工作经验 <span className="text-red-500">*</span>
              </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="请选择" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-3">0-3年</SelectItem>
                  <SelectItem value="3-5">3-5年</SelectItem>
                  <SelectItem value="5-10">5-10年</SelectItem>
                  <SelectItem value="10+">10年以上</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="education">
                最高学历 <span className="text-red-500">*</span>
              </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="请选择" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bachelor">本科</SelectItem>
                  <SelectItem value="master">硕士</SelectItem>
                  <SelectItem value="phd">博士</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">
                最近公司 <span className="text-red-500">*</span>
              </Label>
              <Input id="company" placeholder="最近公司" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="position">
                最近职位 <span className="text-red-500">*</span>
              </Label>
              <Input id="position" placeholder="最近职位" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="desired-industry">
                意向行业 <span className="text-red-500">*</span>
              </Label>
              <Input id="desired-industry" placeholder="意向行业" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="desired-location">
                意向工作地点 <span className="text-red-500">*</span>
              </Label>
              <Input id="desired-location" placeholder="意向工作地点" required />
            </div>

            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="desired-position">
                意向职位方向（如技术、产品、运营） <span className="text-red-500">*</span>
              </Label>
              <Input id="desired-position" placeholder="意向职位方向（如技术、产品、运营）" required />
            </div>

            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="referrer">推荐人（如有）</Label>
              <Input id="referrer" placeholder="推荐人（如有）" />
            </div>

            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="channel">从什么渠道了解到真格人才库</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="请选择" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="social">社交媒体</SelectItem>
                  <SelectItem value="friend">朋友推荐</SelectItem>
                  <SelectItem value="other">其他渠道</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="introduction">请简单介绍一下自己，以便我们和被投企业更全面地了解你</Label>
              <Textarea 
                id="introduction" 
                placeholder="请简单介绍一下自己" 
                className="min-h-[120px]"
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>
                上传简历或附件 <span className="text-red-500">*</span>
              </Label>
              <div className="border-2 border-dashed rounded-lg p-6 text-center">
                <div className="flex flex-col items-center gap-2">
                  <Upload className="h-8 w-8 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">上传简历或附件</p>
                  <p className="text-xs text-muted-foreground">
                    支持pdf、doc、ppt、docx、pptx、wps、jpg、jpeg、png、txt等简历格式
                  </p>
                </div>
                <input type="file" className="hidden" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Button type="submit" className="bg-[#8B572A] hover:bg-[#724820] text-white px-8">
            预览并提交
          </Button>
        </div>
      </form>
    </div>
  )
}

